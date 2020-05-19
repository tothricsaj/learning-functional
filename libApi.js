import {
    forEach,
    forEachObject,
    unless,
    every,
    some,
    tap,
    unary,
    once,
    memoize,
    map,
    filter,
} from './lib/es8-functional.js'

window.myLib = {
    forEachObject: forEachObject,
    forEach: forEach,
    unless: unless,
    every: every,
    some: some,
    tap: tap,
    unary: unary,
    once: once,
    memoize: memoize,
    map: map,
    filter: filter
}