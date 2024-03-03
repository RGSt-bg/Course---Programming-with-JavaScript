function editElement(textArea, oldText, newText) {
    
    let text = textArea.textContent;
    oldText = new RegExp(oldText, 'g'); // По моят начин беше без това, но Judge ми показва 0/100!!!
    let newArea = text.replace(oldText, newText);
    return textArea.textContent = newArea;
}