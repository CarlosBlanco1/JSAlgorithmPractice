let someName = function someFunction() {

    if(true)
    {
        var shouldBeAccesible = "message";
    }

    if(true)
    {
        let shouldnotPrint = "another message";
        const shouldntPrintEither = "nother' one"
    }

    console.log(shouldBeAccesible);
}

someName();