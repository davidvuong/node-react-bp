#!/usr/bin/env node
/**
 * node-react-bp/gulp.babel.js
 *
 * Copyright (c) 2016 David Vuong <david.vuong256@gmail.com>
 * Licensed MIT
 */
'use strict';
import gulp from 'gulp';
import babel from 'gulp-babel';
import clean from 'gulp-clean';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import sequence from 'run-sequence';

const BUILD_DIR   = './build/';
const SRC_DIR     = './src/';

gulp.task('clean', () => {
    return gulp.src(BUILD_DIR)
        .pipe(clean());
});

gulp.task('build-client', () => {
    return browserify(`${SRC_DIR}/client.js`)
        .transform(babelify, { presets: ['es2015', 'react'] })
        .bundle()
        .pipe(source('bundle-client.js'))
        .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('build-server', () => {
    return browserify(`${SRC_DIR}/server.js`)
        .transform(babelify, { presets: ['es2015', 'react'] })
        .bundle()
        .pipe(source('bundle-server.js'))
        .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('watch', () => {
    return gulp.watch(`${SRC_DIR}/**/*`, () => {
        return sequence(
            'clean', ['build-client', 'build-server']
        );
    });
});

gulp.task('default', () => {
    return sequence(
        'clean', ['build-client', 'build-server'], 'watch'
    );
});
