
import { chromium } from 'playwright';

module.exports = {
    browserType: chromium,
    launchConfig: {
        headless: false,
        slowMo: 300
    },
    contextConfig: {}
};