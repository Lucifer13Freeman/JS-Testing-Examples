const Page = require('./page');

class HelloPage extends Page 
{

    get toggleBtn() { return $('#toggle-btn');}

    get inputElem() { return $('#input-elem'); }

    get helloTitle() { return $('#hello'); }

    async toggleTitleWithInput (text) 
    {
        await this.inputElem.setValue(text);
        await this.toggleBtn.click()
    }

    open() { return super.open('hello'); }
}

module.exports = new HelloPage();