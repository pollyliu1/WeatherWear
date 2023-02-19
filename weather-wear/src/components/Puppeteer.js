import React from 'react'
import { useState } from 'react'

export default function FetchPinterest() {
    const pinterestGet = () => {
        fetch('https://angelaxu.autocode.dev/weatherwear@dev/puppeteer/')
        .then((response) => response.json())
        .then((json) => console.log(json))
    }
}
