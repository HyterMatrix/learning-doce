module.exports = {
    title: '学习文档',
    description: '自学记录的文档',
    themeConfig: {
        repo: 'HyterMatrix/learning-docs',
        repoLabel: '查看源码',
        // 假如你的文档仓库和项目本身不在一个仓库：
        docsRepo: 'HyterMatrix/learning-docs',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '帮助我们改善此页面！',
        nav: [
            {
                text: 'Java系列',
                items: [
                    { text: 'Java', link: '/java/' },
                    { text: 'Spring', link: '/spring/' },
                    { text: 'SpringBoot', link: '/spring-boot/' },
                    { text: 'SpringCloud', link: '/spring-cloud/' },
                    { text: '文档', items: [
                            { text: '阿里巴巴Java开发', link: 'http://click.aliyun.com/m/1000019584/' },
                        ] 
                    },
                  ]
            },
            {
                text: 'Python系列',
                items: [
                    { text: 'Python', link: '/python/' },
                  ]
            },
            { text: '博客', link: 'https://hyter.me/' },
            {
                text: '备用地址',
                items: [
                    { text: '备用博客地址', link: 'https://HyterMatrix.coding.me/blog' },
                    { text: '备用文档地址', link: 'https://HyterMatrix.coding.me/learning-docs' }
                  ]
            },
            { text: '更新记录', link: '/update/' },
        ],
        sidebar: {
            '/java/': [{
                title: 'Java笔记',
                collapsable: false,
                children:[
                '',
                '01-getting-started',
                '02-java-basic',
                '03-java-class-and-object',
                '04-inheritance',
                'QA']
            }],
            '/spring/': [{
                title: '笔记',
                collapsable: false,
                children:[
                    '',
                ]
            }],
            '/spring-boot/': [{
                title: 'SpringBoot',
                collapsable: false,
                children:[
                    '',
                    '01-spring-boot-config-file'
                ]
            }],
            '/spring-cloud/': [{
                title: '笔记',
                collapsable: false,
                children:[
                    ''
                ]
            }],
            '/es6/': [{
                title: '笔记',
                collapsable: false,
                children:[
                    ''
                ]
            }],
            '/nodejs/': [{
                title: '笔记',
                collapsable: false,
                children:[
                    ''
                ]
            }],

        },
        serviceWorker: {
            // updatePopup: true, // Boolean | Object, 默认值是 undefined.
            // 如果设置为 true, 默认的文本配置将是:
            updatePopup: {
               message: "有新的内容更新",
               buttonText: "刷新"
            }
        },

        lastUpdated: '上次更新',
        sidebarDepth: 2
    },
    markdown:{
        lineNumbers: true
    },
    base:'/learning-docs/',
    port:8000
};
