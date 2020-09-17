function getInputValue(elementId: string): string {
    const inputElement: HTMLInputElement =
        <HTMLInputElement>document.getElementById(elementId);

    return inputElement.value;
}

function getLogger(msg: string): void { console.log(msg) };

export { getInputValue as getValue, getLogger };


