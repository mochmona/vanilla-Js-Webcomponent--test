
<!-- ```data image selubung, greedy, warisan apparel -->
<!-- horizontal 600px -->
  images = [
      "https://images.pexels.com/photos/1884583/pexels-photo-1884583.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3771506/pexels-photo-3771506.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/4185875/pexels-photo-4185875.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/4185875/pexels-photo-4185875.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/5559986/pexels-photo-5559986.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/5560560/pexels-photo-5560560.jpeg?auto=compress&cs=tinysrgb&w=600"
    ];
  
  imagesPotrait = [
    "https://images.pexels.com/photos/7114679/pexels-photo-7114679.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5561132/pexels-photo-5561132.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/5559990/pexels-photo-5559990.jpeg?auto=compress&cs=tinysrgb&w=600",
  ]

  imageGif-imgBox= [
    <a href="https://imgbox.com/5oYgq8js" target="_blank"><img src="https://images2.imgbox.com/4d/46/5oYgq8js_o.gif" alt="image host"/></a>

    <a href="https://imgbox.com/bs3Pi2xH" target="_blank"><img src="https://thumbs2.imgbox.com/87/7c/bs3Pi2xH_t.gif" alt="image host"/></a>

    

  ]
  

```
<!-- API JSONPlaceHolder -->
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((json) => console.log(json));
    </script>

<!-- logo -->
logo = [selubung,warisan,greedy]
cloudifyImages = [logo, asset, etc]
icon = [icon8, boxicon, materialUI]

<!-- pallete -->
palleteColor = 
root {
  --Bg-main:  #181a21;
  --Bg-second: #292929 ;
  --Bg-third:  #3c3c3c ;
  --Bg-fourt: cornflowerblue ;

  --color-light: #d3d4d6 ;
  --color-dark:  #757575 ;

  --animation-fast:   0.1s ease;
  --animation-medium: 1s ease;

  --border-dark:  2px black inset ;
  --border-light: 2px white inset;
  --b-rad-xs: 4px;
  --b-rad-sm: 8px;
  --b-rad-md: 16px;
  --b-rad-lg: 32px;
  --brad-custom: 40px;

}