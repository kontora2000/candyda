const gulp = require('gulp');
const gutil = require('gutil');
const ftp = require('vinyl-ftp');
var localFiles = ['./.nuxt/**/*'];

var user = process.env.FTP_USER;
var password = process.env.FTP_PASSWORD;
function getFtpConnection(){
    return ftp.create({
        host: '135.181.157.248',
        port: 21,
        user: 'ftpadmin',
        password: 'admin',
        log: gutil.log,
    });
}


const remoteLocation = '/var/www/duma.one/';
gulp.task('remote-deploy', function(){
    var conn = getFtpConnection();
    return gulp.src(localFiles, {base: '.', buffer: false,})
        .pipe(conn.newer(remoteLocation))
        .pipe(conn.dest(remoteLocation))
})
