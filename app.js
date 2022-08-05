let product_form = document.getElementById('product_form')
let modalmsg = document.querySelector('.msg')
let singleview = document.querySelector('.singleview')
let productList = document.getElementById('productList')
let product_update_form = document.getElementById('product_update_form')
let shopmodal_btn = document.getElementById('shopmodal_btn')


let GetAllProducts = () =>{
    const data = ReadLsData('Product')

    // If Ls data not exist

    if (!data) {
       productList.innerHTML =` <tr>
        <td colspan = "7" class= "text-center"> Products Not Found! </td>
       </tr>` 
    }

    //if exist

    if(data){
        let list = ""
        let total = 0
        // loop for showing data
        data.map((item, index) =>{
            total  += (item.price * item.quantity )
            list += `
            
            <tr>
                  <td>${index+1}</td>
                  <td><img style="width: 50px; height: 50px; border-radius: 10%;" src="${item.image}" alt=""></td>
                  <td>${item.name}</td>
                  <td>${item.price} BDT</td>
                  <td class="text-center">${item.quantity}</td>
                  <td>${item.price * item.quantity} BDT</td>
                  <td>
                    <a class="btn btn-info btn-sm shadow-sm" product_index = '${index}' data-bs-toggle = "modal" href="#shop_single_modal"><i class="fas fa-eye"></i></a>
                    <a class="btn btn-warning btn-sm shadow-sm" product_index = '${index}' data-bs-toggle = "modal" href="#shop_edit_modal"><i class="fas fa-edit"></i></a>
                    <a class="btn btn-danger btn-sm shadow-sm" href=""><i class="fas fa-trash"></i></a>
                  </td>
                </tr>`
        });

        list += `<tr>
            <td colspan = "6" class= "text-end">Total = ${total} BDT</td>
            <td></td>
        </tr>`
        productList.innerHTML = list;
    }



}

GetAllProducts()

product_form.onsubmit = (e) => {
    e.preventDefault()

    // remove modalmsg alert on shopmodalbtn
    shopmodal_btn.onclick = () => {
        modalmsg.innerHTML = ""
    }


    // get form data from Form Data object

    let form_data = new FormData(e.target)
    let Product_data = Object.fromEntries(form_data.entries())
    let {name,image,quantity,price} = Object.fromEntries(form_data.entries())

    
    // Form Validation

    if (!name || !image || !quantity || !price) {
        modalmsg.innerHTML = alertFucntion('All fields are required!')
    } else {

       CreateLsData('Product', Product_data)
       GetAllProducts()
       modalmsg.innerHTML = alertFucntion('Your Product has been added.', 'success') 
       product_form.reset()
      
    }
    


}



// Single Product view

productList.onclick = (e) => {
    e.preventDefault()


    if (e.target.classList.contains('fa-eye')) {
        //get data & index
    let index = e.target.parentElement.getAttribute("product_index")
    let data = ReadLsData("Product")
    
    
    // get data keys
    const {name, image, price} = data[index]

    //send data to single modal view
    singleview.innerHTML = `
        <img class="shadow" src="${image}" alt="">
        <h2>${name}</h2>
        <p>Price: ${price} BDT</p>
    `


    } else if(e.target.classList.contains('fa-edit')) {
        
    //get data & index
    let index = e.target.parentElement.getAttribute("product_index")
    let data = ReadLsData("Product")
    
    
    // get data keys
    const {name, image, price, quantity} = data[index]

    //send data to single modal view
    product_update_form.innerHTML = `
    <div class="my-2 ">
    
    <input name="index" type="hidden" value= "${index}" class="form-control shadow-sm " placeholder="Product Name" >
  </div>
  <div class="my-2 ">
    <label for="">Name</label>
    <input name="name" type="text" value= "${name}" class="form-control shadow-sm" placeholder="Product Name" >
  </div>
  <div class="my-2">
  <img class= "w-100 rounded" src="${image}" alt="">
  </div>
  <div class="my-2">
    <label for="">Image</label>
    <input name="image" type="text" value= "${image}" class="form-control shadow-sm" placeholder="Product Image Url">
  </div>
  <div class="my-2">
    <label for="">Quantity</label>
    <input name="quantity" type="text" value= "${quantity}" class="form-control shadow-sm" placeholder="Product Quantity">
  </div>
  <div class="my-2">
    <label for="">Price</label>
    <input name="price" type="text" value= "${price}" class="form-control shadow-sm" placeholder="Product Price">
  </div>
  <div class="my-2 text-center">
    
    <input type="submit" class="btn btn-success shadow-sm w-75 fs-5" value="Update Product">
  </div>
    `
    }
    
    
}

// Update Product




// Product form submission


product_update_form.onsubmit = (e) => {
    e.preventDefault()

    //get form data
    const form_data = new FormData(e.target)
    const {name, image, quantity, price, index} = Object.fromEntries(form_data.entries())

    //get all data

    all_data = ReadLsData('Product')
    all_data[index] = {
        name,image,quantity,price
    }


    //update whole data
    updateLsData("Product", all_data)
    GetAllProducts()
    
}
