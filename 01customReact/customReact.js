function customRender(myReactElement,container){

    // single element
    // const domElement = document.createElement(myReactElement.type)
    // domElement.innerHTML = myReactElement.children;
    // domElement.setAttribute('href', myReactElement.props.href)
    // domElement.setAttribute('target', myReactElement.props.target)
    // container.appendChild(domElement);

    // multiple elements
    const domElement = document.createElement(myReactElement.type)
    domElement.innerHTML = myReactElement.children;
    for (const prop in myReactElement.props){
        if(prop === 'children') continue;
        console.log(prop);
        domElement.setAttribute(prop, myReactElement.props[prop])
    }
    container.appendChild(domElement);

}

const reactElement = {
    type: 'a',
    props: {
        href: 'http://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer);