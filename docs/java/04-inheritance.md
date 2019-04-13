# 第4章 继承

继承是面向对象程序设计的一个基本概念。利用继承，可以基于已存在的类构造一个新类。继承已存在的类就是复用（继承）这些类的方法和域。在此基础上，还可以添加一些新的方法和域，以满足新的需求。

## 类、子类、超类

### 定义子类

关键字`extends`表示继承

```java
public class Manager extends Employee{
    // 添加方法或域
}
```

关键字`extends`表明正在构造的新类派生于一个已存在的类。已经存在的类称为`超类（superclass）`、`基类（base class）`或`父类（parent class）`; 新类称为`子类（subclass）`、`派生类（derived class）`或`孩子类（child class）`。

尽管Employee类是一个超类，但并不是因为它优于子类或者拥有比子类更多的功能。实际上恰恰相反，子类比超类拥有的功能更加丰富。

### 覆盖方法

不是所有的超类中的方法都对子类适用。为此我们需要提供一个新的方法来`覆盖（override）`超类中的方法。

如果我们需要调用超类中的方法，需要使用特定的关键字`super`来解决这个问题。

### 子类构造器

我们来提供一个构造器

```java
public Manager(String name, double salary, int year, int month, int day){
    super(name, salary, year, month, day);
    bonus = 0;
}
```

这里的关键字`super`具有不同的含义。

`super(n, s, year, month, day);` 是调用超类Employee中含有n, s, year, month, day参数的构造器的简写形式。

因为子类的构造器不能访问超类的私有域，所以必须利用超类的构造器对这部分私有域进行初始化，我们可以通过super实现对超类构造器的调用。使用super调用构造器的语句必须是子类构造器的第一条语句。

如果子类的构造器没有显式的调用超类的构造器，则将自动的调用超类默认（没有参数）的构造器。如果超类没有不带参数的构造器，并且在子类的构造器中有没有显式的调用超类的其他构造器，则Java编译器将报告错误。

### 继承层次

继承并不仅限于一个层次。例如，可以由Manager类派生Executive类。由一个公共超类派生而来的所有类的集合被成为`继承层次（inheritance hierarchy）`。在继承层次中，从某个特定的类到其祖先的路径被称为该类的`继承链（inheritance chain）`。

Java不支持多继承。

### 多态

暂略

### 阻止继承：final类和方法

有时候，可能希望阻止人们利用某个类定义子类。不允许扩展的类被称为final类。如果在定义类的时候使用fianl修饰符就表明这个类是final类。例如，假设希望阻止人们定义Executive类的子类，就可以在定义这个类时候，使用final修饰符声明。

```java
public fianl class Executive extends Manager
{
    ...
}
```

类中的特定方法也可以声明为final。如果这样做，子类就不能覆盖这个方法（final类中的所有方法紫宗的称为final方法）。

```java
public class Employee
{
    ...
    public final String getName()
    {
        return name;
    }
    ...
}
```

将方法或类声明为final主要的目的是：确保它们不会在子类中改变语义。

### 强制类型转换

将一个类型强制转换成另一个类型的过程为类型转换（[参考数值类型的转换](/java/02-java-basic.md#数值类型的转换)）。

```java
double x = 3.405;
int nx = (int) x;
```

对象引用的转换语法与数值表达式的类型转换类似，仅需要用一对圆括号将目标类名括起来，并放置在需要转换的对象引用之前就可以了。

```java
Manager boss = (Manager) staff[0];
```

进行类型转换的唯一原因是：在暂时忽视对象的实际类型之后，使用对象的全部功能。

在进行类型转换之前，先查看一下是否能够成功的转换。这个操作很简单的使用`instanceof操作符`就可以

```java
if(staff[1] instanceof Manaager){
    boss = (Manager) staff[1];
}
```

如果这个类型转换不可能成功，编译器就不会进行这个转换。例如下面这个转换：

```java
String c = (String) staff[1];
```

将会产生编译错误，这是因为String不是Employee的子类

综上所述

- 只能再继承层次内进行类型转换
- 在将超类转换成子类之前，应该使用instanceof进行检查

注意 如果x为null， `x instanceof C` 不会产生异常，只会返回false。之所以这样处理是因为null没有引用任何对象，当然也不会应用C类型的对象。

### 抽象类

使用`abstract关键字`

### 受保护访问

在之前了解的，最好将类中的域标记为`private`，而方法标记为`public`。任何声明为private的内容对其他类都是不可见的。这个对子类来说也是完全适用，即子类也不能访问超类的私有域。

而然有些时候，喜欢超类中的某些方法允许被子类访问，或允许子类的方法访问超类的某个域。为此需要将这些方法或域声明为`protected`.例如，如果将超类Employee中的hireDay声明为`protected`，而不是私有的，Manager中的方法就能直接访问它。

受保护的方法更具有实际意义。如果需要限制某个方法的使用，就可以将它声明为protected。这表明子类的道信任，可以正确的使用这个方法，而其他类不行。

> 事实上，Java中受保护部分对所有子类以及同一个包中的所有其他类都可见。

Java用于控制可见性的4个访问修饰符

- 仅对本类可见 --- private
- 对所有类可见 --- public
- 对本包和多有子类可见 --- protected
- 对本报可见 --- 默认（很遗憾），不需要修饰符

## Object:所有类的超类

Object类是Java中所有类的始祖，在Java中每个类都是有它扩展而来。但是并不需要这样写：

```java
public class Employee extends Object
```

如果没有明确指出超类，Object就被分为是这个类的超类。由于在Java中，每个类都是由Object类扩展而来，所有，熟悉这个类提供的所有服务十分重要。

可以是用Object类型的变量引用任何类型的对象

```java
Object obj = new Employee("Harry Hacker", 35000);
```

当然，Object类型的变量只能用于作为各种值的通用持有者。要相对其中的内容进行具体的操作，还需要清楚对象的原始类型，并进行相应的类型转换：

```java
Employee e = (Employee) obj;
```

在Java中只有`基本类型（primitive types）`不是对象，例如，数值、字符和布尔类型的值都不是对象。

所有的数组类型，不管是对象数组还是基本类型的数组都扩展了Object类

```java
Employee staff = new Employee[10];
obj = staff; // ok
obj = new int[10]; // ok
```

### equals 方法

Object类中的`equals`方法用于检测一个对象是否等于另一个对象。在Object类中，这个方法将判断两个对象是否具有相同的引用。如果两个对象具有相同的引用，它们一定是相等的。

### 相等测试与继承

如果隐式和显示的参数不属于同一个类，equals方法将如何处理呢？这是一个很有争议的问题。如果发现不匹配，equalse方法就会返回false。但是，许多程序员却喜欢使用instanceof进行检测

```java
if(!(otherObject instanceof Employee)) return false;
```

这样做不但没有解决otherObject是子类的情况，并且还有可能会招致一些麻烦。这就是建议不要使用这种处理方式的原因所在，Java语言规范要求equals方法具有下面的特性

1. 自反性：对于任何非空引用x，x.equalse(x)应该返回true。
2. 对称性：对于任何引用x和y，当且仅当y.equals(x)返回true，x.equals(y)也应该返回true。
3. 传递性：对于任何引用x、y和z，如果x.equals(y)返回true，y.equals(z)返回true,那么，x.equals(z)也应该返回true。
4. 一致性：如果x和y引用的对象没有发生变化，返回调用x.equals(y)应该返回同样的结果。

详情暂略。参考《卷I》p168

### 

## 泛型数组列表

## 对象包装器与自动装箱

## 参数数量可变的方法

## 枚举类

## 反射

## 继承的设计技巧
