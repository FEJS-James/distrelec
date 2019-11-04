<template>
  <div id="product-slider" class="product-slider"  >
    <div v-for="(product, i) in products"  :key="i" class='product-item' >
      <a href='product.url'>
        <div class='img-container'>
          <img :src='product.productImageUrl' :alt='product.productImageAltText'/>
        </div>
        <div class='add-remove-container'>
          <button class='remove'>-</button>
          <button class='add'>+</button>
        </div>
        <div class='product-info'>
          <p class='price'>
            {{ product.price.formattedValue }} 
            <span>({{ product.price.currency }})</span>
          </p>
          <p class='title'>{{ product.name }} </p>
          <button class='btn btn-primary buynow'>Buy now</button>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  import 'slick-slider';
  import raw_products from '@/assets/data/data.json'

  export default {
      name: 'carousel',
      el: "#carousel",

      mounted() { 
        this.products = raw_products.carouselData

        this.$nextTick(function(){
          $('.product-slider').slick({ 
            slidesToShow: 4,
            dots: false,
            autoplay: false,
            arrows: true,
            rows: 1  
          })
          var mh = 0;
          $('.product-info .title').each(function(){
            mh = $(this).height() > mh ? $(this).height() : mh;
          })
          $('.product-info .title').each(function(){
            $(this).height(mh) ;
          }) 
        })

      },
      data() {
        return { 
          products: []
        }
      },
  };
</script>
