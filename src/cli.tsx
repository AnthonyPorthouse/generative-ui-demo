#!/usr/bin/env node

import 'dotenv/config';
import { render } from "ink";
import React from "react";

import Tui from "./components/Tui.js";

async function main() {
    render(<Tui />)
}

await main();