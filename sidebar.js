
const sidebarElements = {
  root: {
    tag: 'div',
    selectorType: 'id', 
    name: 'sidebar'
  },
  items: [
    {
      tag: 'div', 
      selectorType: 'class',
      name: 'menu-menu', 
      children: [
        {
          tag: 'button',
          selectorType: 'id', 
          name: 'sidebar-collapse', 
          content: 'hide'
        }, 
        {
          tag: 'button',
          selectorType: 'id', 
          name: 'mode-toggle', 
          content: 'toggle'
        }, 
        
      ]
    },
    {
      tag: 'div', 
      selectorType: 'class', 
      name: 'title', 
      children: [
        {tag: 'h2', selectorType: null, content: "rachel's website"}, 
      ]
    }, 
    {
      tag: 'div', 
      selectorType: 'class', 
      name: 'blurb',
      children: [
        {
          tag: 'h4', 
          selectorType: null, 
          content: 'menu'
        }, 
        {
          tag: 'ul', 
          selectorType: 'class', 
          name: 'menu'
        }  
      ]
    }, 
    {
      tag: 'div', 
      selectorType: 'class', 
      name: 'blurb buttons', 
    }
  ]
  }
  
  
  
const links = [
  {
    title: 'Home', 
    path: '/'
  },
  {
    title: 'About', 
    path: '/pages/about.html'
  },
  {
    title: 'Guides', 
    path: '/pages/guides.html'
  },
  {
    title: 'Resources', 
    path: '/pages/resources.html'
  },
  {
    title: 'Creds', 
    path: '/pages/credits.html'
  },
];





$('body').append(`<${sidebarElements.root.tag} ${sidebarElements.root.selectorType}="${sidebarElements.root.name}"></${sidebarElements.root.tag}>`);

function createEl(props) {
  const content = props.content ? props.content : '';
  if (props.selectorType != null) {
    return $(`<${props.tag} ${props.selectorType}="${props.name}">${content}</${props.tag}>`);
  } else {
    return $(`<${props.tag}>${content}</${props.tag}>`);
  }
}


sidebarElements.items.forEach(function(item) {
  const section = createEl(item);
  $('#sidebar').append(section); 
  if (item.children) {
    item.children.forEach(function(child) {
      const sectionChild = createEl(child);
      $(section).append(sectionChild);  
    })
  }
})



links.forEach(function(link) {
  const listItem = $(`<li><a href="${link.path}">${link.title}</a></i>`);
  $('.menu').append(listItem);
});

buttons.forEach(function(button) { 
  $('.buttons').append(
      $(`<img src="${button.url}" alt="${button.alt}"/>`)
    )
})