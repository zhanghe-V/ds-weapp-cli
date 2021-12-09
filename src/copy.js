/*
 * @Description: Description
 * @Author: BeiJia
 * @Date: 2021-12-09 16:48:27
 */
const chalk = require('chalk')
const fs = require('fs')

/**
 * copy file
 *
 * @param  {String} from copied file
 * @param  {String} to   target file
 */
function copyFile(from, to) {
    fs.writeFileSync(to, fs.readFileSync(from))
    return Promise.resolve()
}

/**
 * copy directory
 * 同步的方式
 * @param  {String} from
 * @param  {String} to
 */
async function copyDir(from, to) {
    try {
        await isExistSync(to) // 目标文件夹是否存在，利用 fs.accessSync 可访问性检查
    } catch (err) {
        // 不存在，则创建文件夹
        fs.mkdirSync(to)
    }
    const paths = fs.readdirSync(from) // 读取目录的内容
    paths.forEach(async (path) => {
        const src = `${from}/${path}`
        const dist = `${to}/${path}`
        const fileType = await justFileOrDir(src) // 判断是文件还是文件夹
        if (fileType === 'file') {
            // 文件-直接读写复制一份
            fs.writeFileSync(dist, fs.readFileSync(src))
            console.log(chalk.magenta(`🚚  ${src} `))
        } else if (fileType === 'dir') {
            // 文件夹-递归继续往下走
            copyDir(src, dist)
        }
    })
}

/**
 * is exists
 *
 * @param  {String} file
 * @return {Promise}
 */
function isExist(path) {
    return new Promise((resolve, reject) => {
        fs.access(path, (err) => {
            if (err !== null) {
                reject(`${path} does not exist`)
            } else {
                resolve(true)
            }
        })
    })
}

function isExistSync(path) {
    return fs.accessSync(path)
}

/**
 * is exists
 *
 * @param  {String} src
 * @return {Promise}
 */
function justFileOrDir(src) {
    return new Promise((resolve, reject) => {
        fs.stat(src, (err, stat) => {
            if (err) {
                reject(err)
            }
            if (stat.isFile()) {
                resolve('file')
            } else if (stat.isDirectory()) {
                resolve('dir')
            }
        })
    })
}

module.exports = {
    copyFile,
    copyDir,
}