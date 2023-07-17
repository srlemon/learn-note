import {defineUserConfig} from "vuepress";
import { defaultTheme } from '@vuepress/theme-default'
import { mdEnhancePlugin}from 'vuepress-plugin-md-enhance'


export default defineUserConfig({
    title: 'olongfen dev note',
    plugins:[
        [
            mdEnhancePlugin(
            {
                // 启用 figure
                figure: true,
                // 启用图片懒加载
                imgLazyload: true,
                // 启用图片标记
                imgMark: true,
                // 启用图片大小
                imgSize: true,
            })
        ]
    ],
    theme: defaultTheme({
        repo: 'olongfen/olongfen.github.io',
        logo:'/logo.png',
        docsDir: 'docs',
        docsBranch: 'master',
        editLink: true,
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: true,
        navbar: [
            {text: 'Home',link:'/'},
            {text: 'GOLANG',link:'/go/'},
            {text: 'PYTHON',link:'/python/'},
            {text: 'DOCKER',link:'/docker/'},
            {text: 'LINUX',link:'/linux/'},
            {text: 'K8S',link:'/k8s/'},
            {text: 'SQL',link:'/sql/'},
            {text: 'GIS',link:'/gis/'},
            {text: '数据库系统工程师笔记',link:'/db-system-engineer/'},
        ],
        sidebar: {
            '/go/': [
                {
                    text: 'go快速入门',link:'/go/golang'
                },
                {
                    text: 'go基本排序算法',link:'/go/sort'
                },
                {
                    text: 'go领域驱动入坑',link:'/go/golang_ddd'
                },
                {
                    text: 'go tcp入坑',link:'/go/gotcp'
                },
                {
                    text: '时间包使用',link:'/go/time'
                }
            ],
            '/python/':[
                {text: 'WTI原油数据爬虫',link: '/python/wti_day'},
                {text: '亚马逊商品爬虫',link: '/python/ymx'},
            ],
            '/linux/':[
                {text: '基本骚操作',link: '/linux/base'},
                {text: 'fedora',link: '/linux/fedora'},
                {text: '常用指令',link: '/linux/cmd'},
                {text: 'ubuntu22.04系统问题修复日志',link: '/linux/ubuntu'},
                {text: 'ubuntu_服务器日常问题处理备忘录',link: '/linux/ubuntu_daily_note'},
                {text:'ovirt安装',link: 'ovirt4.3_centos7'},
            ],
            '/docker/':[
                {text: 'docker安装',link: '/docker/install'},
                {text: 'docker-compose项目部署',link: '/docker/docker-compose'},
            ],
            '/sql/':[
                {text: 'MYSQL',link: '/sql/mysql/', children:[{text:'基本操作',link:'/sql/mysql/mysql'}]},
                {text: 'POSTGRES',link: '/sql/postgresql/' ,children:[{text:'常用sql',link:'/sql/postgresql/note'}]},
            ],
            '/gis/':[
                {text: 'GIS_Detail',link: '/gis/gis_detail'},
                {text: 'GDAL',link: '/gis/gdal'},
                {text: 'OGR',link: '/gis/ogr'},
                {text: 'spatialite',link: '/gis/spatialite'},
            ],
            '/db-system-engineer/':[
                {text:"第一章计算机系统知识",link: '/db-system-engineer/chapter-one'},
                {text:"第四章操作系统基础",link: '/db-system-engineer/chapter-four'}
            ]

        }
    })
})