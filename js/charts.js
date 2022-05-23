//图1js------
//图1的js-------------
var myChart = echarts.init(document.getElementById('tu1'));

// 指定图表的配置项和数据
var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['女性患者人数（人）', '男性患者人数（人）'],
        top: 'bottom'
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '7%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: [
                1990, 1992, 1994, 1996, 1998, 2000, 2002, 2004, 2006, 2008, 2010, 2012,
                2014, 2015, 2016, 2017
            ]
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '女性患者人数（人）',
            type: 'line',
            stack: 'Total',
            color: '#F5DEB3',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [
                2489429.674, 2591302.229, 2727423.064, 2924723.479, 3168917.265,
                3442702.589, 3749460.543, 4085510.743, 4455746.754, 4908808.155,
                5356729.908, 5776874.254, 6247974.397, 6496277.663, 6759739.083,
                7031237.978
            ]
        },
        {
            name: '男性患者人数（人）',
            type: 'line',
            stack: 'Total',
            color: '#8B4513',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [
                1553595.433, 1635274.855, 1733664.43, 1867888.201, 2032518.426,
                2214594.253, 2438071.959, 2678771.526, 2927217.73, 3205077.797,
                3476996.373, 3754746.562, 4090297.465, 4264326.119, 4446122.925,
                4627462.387
            ]
        }
    ]
};

myChart.setOption(option);

//图2js------
//图2的js-------------
var myChart = echarts.init(document.getElementById('tu2'));

// 指定图表的配置项和数据
var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',

        }
    },

    legend: {
        data: ['年数变化百分比'],
        top: 'bottom',
        show: false
    },
    grid: {
        left: '1%',
        right: '8%',
        bottom: '1%',
        top: '4%',
        containLabel: true
    },

    xAxis: [
        {
            type: 'value',

            min: -60,
            max: 130,
            interval: 40,
            axisLabel: {
                formatter: '{value} %'
            }
        }
    ],
    yAxis: [
        {
            type: 'category',
            axisTick: {
                show: false
            },
            data: [
                '艾滋病毒/艾滋病',
                '腹泻病',
                '疟疾',
                '下呼吸道感染',
                '新生儿疾病',
                '肺结核',
                '自残',
                '先天性畸形',
                '人际暴力',
                '哮喘',
                '缺铁性贫血',
                '道路伤害',
                '慢性阻塞性肺疾病',
                '肝硬化',
                '中风',
                '妇科疾病',
                '缺血性心脏病',
                '焦虑症',
                '抑郁症',
                '摔伤',
                '偏头痛',
                '未矫正的屈光不正',
                '背部和颈部疼痛',
                '气管、支气管、肺癌',
                '高血压性心脏病',
                '肾脏疾病',
                '其他听力损失',
                '口腔疾病',
                '糖尿病',
                '阿尔茨海默病和其他形式的痴呆症'
            ]
        }
    ],
    series: [
        {
            name: '年数变化百分比',
            type: 'bar',
            itemStyle: {
                normal: {
                    //这里是重点
                    color: function (params) {
                        //注意，如果颜色太少的话，后面颜色不会自动循环，最好多定义几个颜色
                        var colorList = [
                            '#DDD4C5',
                            '#DDD4C5',
                            '#DDD4C5',
                            '#DDD4C5',
                            '#DDD4C5',
                            '#DDD4C5',
                            '#DDD4C5',
                            '#DDD4C5',
                            '#DDD4C5',
                            '#DDD4C5',
                            '#DEB887',
                            '#DEB887',
                            '#DEB887',
                            '#DEB887',
                            '#DEB887',
                            '#DEB887',
                            '#DEB887',
                            '#DEB887',
                            '#DEB887',
                            '#DEB887',
                            '#DEB887',
                            '#DEB887',
                            '#DEB887',
                            '#DEB887',
                            '#DEB887',
                            '#DEB887',
                            '#DEB887',
                            '#DEB887',
                            '#DEB887',
                            '#A0522D'
                        ];
                        return colorList[params.dataIndex];
                    }
                }
            },
            label: {
                show: false,
                position: 'inside'
            },
            emphasis: {
                focus: 'series'
            },
            data: [
                -52, -51, -46, -42, -32, -29, -17, -16, -2, -1, 5, 6, 9, 11, 11, 22, 26,
                28, 29, 30, 31, 32, 36, 36, 42, 44, 46, 49, 83, 122
            ]
        }
    ]
};

myChart.setOption(option);

//图13js------
//图13的js-------------
var myChart = echarts.init(document.getElementById('tu13'));

// 指定图表的配置项和数据
var option = {

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ['line', 'bar'] },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    legend: {
        data: ['东亚地区', '北美高收入地区','西欧地区', '世界平均水平']
    },
    xAxis: [
        {
            type: 'category',
            data: ['基本ADL', '复杂ADL'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '非正式照护投入/(每小时)',
            min: 0,
            max: 5,
            interval: 1,
            axisLabel: {
                formatter: '{value} 小时'
            }
        },
        {
            type: 'value',
            name: '世界平均水平',
            min: 0,
            max: 5,
            interval: 1,
            axisLabel: {
                formatter: '{value} 小时'
            }
        }
    ],
    color:[ 'rgb(205,133,63)','rgb(222,184,135)', 'rgb(245,245,220)','rgb(160,82,45)'],
    series: [
        {
            name: '东亚地区',
            type: 'bar',
            data: [
                3.6, 4.7,
            ]
        },
        {
            name: '北美高收入地区',
            type: 'bar',
            data: [
                2.1, 4,
            ]
        },
        {
            name: '西欧地区',
            type: 'bar',
            data: [
                1.1, 3.5,
            ]
        },
        {
            name: '世界平均水平',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 3.6]
        }
    ]
};

myChart.setOption(option);

//图10js------
//图10的js-------------
var myChart = echarts.init(document.getElementById('tu10'));

// 指定图表的配置项和数据
var option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} :{d}%'
    },
    legend: {
        left: 'center',
        textStyle:{fontSize:'17'},
        top: 'bottom',
        data: [
            '子女',
            '配偶',
            '非亲属与其它',

        ]
    },
    toolbox: {
        show: true,
        feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
        }
    },
    color:['rgb(205,133,63)', 'rgb(222,184,135)', 'rgb(245,245,220)'],
    series: [
        {
            name: '照护者类型',
            type: 'pie',
            radius: [20, 140],
            center: ['50%', '50%'],
            roseType: 'radius',
            itemStyle: {
                borderRadius: 5
            },
            label: {
                show: false
            },
            emphasis: {
                label: {
                    show: true
                }
            },
            data: [
                { value: 47.3, name: '子女' },
                { value: 36.1, name: '配偶' },
                { value: 16.6, name: '非亲属与其它' },
            ]
        },

    ]
};

myChart.setOption(option);

//图8js------
//图8的js-------------
var myChart = echarts.init(document.getElementById('tu8'));

// 指定图表的配置项和数据
var option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        },
        formatter: function (params) {
            var relVal = params[0].name;
            for (var i = 0, l = params.length; i < l; i++) {
                relVal +=
                    '<br/>' +
                    params[i].marker +
                    params[i].seriesName +
                    ' : ' +
                    params[i].value.toLocaleString() +
                    '%';
            }
            return relVal;
        }
    },

    legend: {
        bottom: '5%',
        left: 'center',
        textStyle: {
            fontSize: '14px'
        }
    },

    color: ['#CD853F', '#DEB887', '#F5DEB3'],
    grid: {
        left: '3%',
        right: '25%',
        bottom: '12%',
        containLabel: true
    },
    yAxis: {
        type: 'value',
        max: 100, // 设置最大值是多少
        splitNumber: 5, // 设置分几段显示
        axisLabel: {
            show: true,
            interval: 'auto',
            formatter: '{value} %', // 给每个数值添加%
            textStyle: {
                fontSize: '14px'
            }
        },
        show: true
    },
    xAxis: {
        type: 'category',
        data: ['城市', '农村'],
        axisLabel: {
            textStyle: {
                fontSize: '16px'
            }
        }
    },
    series: [
        {
            name: '从未服用过药物',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
                formatter: '{c} %'
            },
            emphasis: {
                focus: 'series'
            },
            data: ['10.79', '40.86'],
            markLine: {
                symbol: 'none', //去掉警戒线最后面的箭头
                label: {
                    position: 'end', //将警示值放在哪个位置，三个值“start”,"middle","end"  开始  中点 结束
                    formatter: '从未服用过药物（全国）{c} %',
                    textStyle: {
                        fontSize: '15px',
                        color: '#8B4513'
                    }
                },
                data: [
                    {
                        silent: true, //鼠标悬停事件  true没有，false有
                        lineStyle: {
                            //警戒线的样式  ，虚实  颜色
                            type: 'solid',
                            color: '#8B4513'
                        },
                        yAxis: 19.68 // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
                    }
                ]
            }
        },
        {
            name: '曾经服用、但已经停药',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
                formatter: '{c} %'
            },
            emphasis: {
                focus: 'series'
            },
            data: ['16.09', '30.23'],
            markLine: {
                symbol: 'none', //去掉警戒线最后面的箭头
                label: {
                    position: 'end', //将警示值放在哪个位置，三个值“start”,"middle","end"  开始  中点 结束
                    formatter: '曾经服用、但已停药（全国）20.26 %',
                    textStyle: {
                        fontSize: '15px',
                        color: '#ddd4c5'
                    }
                },
                data: [
                    {
                        silent: true, //鼠标悬停事件  true没有，false有
                        lineStyle: {
                            //警戒线的样式  ，虚实  颜色
                            type: 'solid',
                            color: '#ddd4c5'
                        },
                        yAxis: 39.94 // 警戒线的标注值，可以有多个yAxis,多条警示线   或者采用   {type : 'average', name: '平均值'}，type值有  max  min  average，分为最大，最小，平均值
                    }
                ]
            }
        },
        {
            name: '仍在服用',
            type: 'bar',
            stack: 'total',
            label: {
                show: true,
                formatter: '{c} %'
            },
            emphasis: {
                focus: 'series'
            },
            data: ['73.12', '28.9']
        }
    ]
};

myChart.setOption(option);



// 对echarts进行自适应的优化 -------------

//根据窗口的大小变动图表 --- 重点
window.onresize = function(){
    myChart.resize();
    myChart1.resize();
    //myChart1.resize();若有多个图表变动，可多写
}