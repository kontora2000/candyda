const gulp = require('gulp');
const gutil = require('gutil');
const ftp = require('vinyl-ftp');
var localFiles = ['./.nuxt/**/*'];

var user = process.env.FTP_USER;
var password = process.env.FTP_PASSWORD;
function getFtpConnection(){
    return ftp.create({
        host: '141.8.192.93',
        port: 21,
        user: 'a0501694',
        password: 'gpNocUKXvt',
        log: gutil.log,
    });
}

const remoteLocation = '/domains/duma.prostokontora.ru/public_html';
gulp.task('remote-deploy', function(){
    var conn = getFtpConnection();
    return gulp.src(localFiles, {base: '.', buffer: false,})
        .pipe(conn.newerOrDifferentSize(remoteLocation))
        .pipe(conn.dest(remoteLocation))
})
