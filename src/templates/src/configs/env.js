/*
 * @Description: app环境，域名
 * DEV 开发
 * TEST 测试
 * UAT  预发布
 * PROD 生产
 */
const hostConfig = {
   mock: "http://yapi.net/mock",
   dev: "http://dev-api.xxxx",
   test: "http://sit-api.xxxx",
   uat: "https://uat-api.xxxxx",
   prd: "https://api.xxxx",
}

const ENVENUM = {
    DEV:'dev',
    TEST:'test',
    UAT:'uat',
    PRD:'prd'
}

/**
 * 环境配置
 */

const ENV = ENVENUM.DEV

const HOST =  hostConfig[ENV]

export  { HOST, ENV }