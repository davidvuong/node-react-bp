#!/usr/bin/env node
/**
 * node-react-bp/gulp.babel.js
 *
 * Copyright (c) 2016 David Vuong <david.vuong256@gmail.com>
 * Licensed MIT
 */
'use strict';
import gulp from 'gulp';
import clean from 'gulp-clean';
import browserify from 'browserify';
import babelify from 'babelify';
import source from 'vinyl-source-stream';
import sequence from 'run-sequence';

const BUILD_DIR   = './build/';
const SRC_DIR     = ['./client/**/*.js', './shared/**/*.js'];
const ENTRY_POINT = './client/index.js';
const BUNDLE_FILE = 'bundle.js';

gulp.task('clean', () => {
    return gulp.src(BUILD_DIR)
        .pipe(clean());
});

gulp.task('build', () => {
    return browserify(ENTRY_POINT)
        .transform('babelify', { presets: ['es2015', 'react'] })
        .bundle()
        .pipe(source(BUNDLE_FILE))
        .pipe(gulp.dest(BUILD_DIR));
});

gulp.task('watch', () => {
    return gulp.watch(SRC_DIR, () => {
        return sequence('clean', 'build');
    });
});

gulp.task('default', ['watch']);
