var gulp = require("gulp"),
    uglify = require("gulp-uglyfly"),
    refresh = require("gulp-refresh"),
    browserSync = require("browser-sync").create();


gulp.task("browserSync",function(){
    
    browserSync.init({
        server : {
             baseDir: "./" 
        }
    })
    
})

gulp.task("uglyfy",function(){
    
    gulp.src('components/jquery/game.js')
        .pipe(uglify())
        .pipe(gulp.dest('jquery/'))
        .pipe(browserSync.reload({stream:true}))
        
    
});


gulp.task("watch",['browserSync','uglyfy'],function(){
    //refresh.listen();
    gulp.watch('components/jquery/game.js',['uglyfy'])
    
});

gulp.task('default',['watch','uglyfy']);
