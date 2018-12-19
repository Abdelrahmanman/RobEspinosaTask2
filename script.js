var sets = [ 
    	{
            'age': 28, 
            'color': 'red', 
            'fruit': ['apple(checked)','orange','blueberry(checked)','peach']
        },
        {
            'age': 34, 
            'color': 'green', 
            'fruit': ['apple','banana(checked)','blueberry','strawberry(checked)', 'kiwi']
        }
    ];

    function AssignDataFromSet(data) {
        var f = '';        
        var colors = '';
            for (var index = 0; index < data.fruit.length; index++) {
                if (data.fruit[index].includes('(checked)')) {
                    var removeChecked = data.fruit[index].replace('(checked)','');
                    f += '<div>';
                    f +=   '<input  checked type="checkbox" id="'+ removeChecked +'" name="'+ removeChecked +'">';
                    f +=   '<label for="'+ removeChecked +'">'+ capitalizeFirstLetter(removeChecked) +'</label>';
                    f +=  '</div>'; 
                }else{
                    f += '<div>';
                    f +=   '<input type="checkbox" id="'+ data.fruit[index] +'" name="'+ data.fruit[index] +'">';
                    f +=   '<label for="'+ data.fruit[index] +'">'+ capitalizeFirstLetter(data.fruit[index]) +'</label>';
                    f +=  '</div>';
                }
            }


            document.getElementById("fruits").innerHTML = f;
            document.getElementById("age").setAttribute("value", data.age);
            document.getElementById("age").setAttribute("name", "age");

            if(data.color == 'red'){
                colors += '<input type="radio" value="red"  id="color1" checked> Red';
                colors += '<input type="radio" value="green"  id="color2"> Green';
            }else if(data.color == 'green') {
                colors += '<input type="radio" value="red"  id="color1"> Red';
                colors += '<input type="radio" value="green"  id="color2" checked> Green';            
            }

            document.getElementById("colors").innerHTML = colors;
            document.getElementById("color1").setAttribute("name", "color");
            document.getElementById("color2").setAttribute("name", "color");
    }

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function setOneData() {
        var data = sets[0];
        AssignDataFromSet(data)
    }

    

    function setTwoData() {
        var data = sets[1]; 
        AssignDataFromSet(data)     
    }

    setOneData();
    
