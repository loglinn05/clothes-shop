<template>
  <!-- ========================= SECTION MAIN ========================= -->
  <section class="section-main bg padding-y">
    <div class="container">
      <div class="row">
        <aside class="col-md-3 mb-1 mb-md-0">
          <nav class="card">
            <ul class="menu-category">
              <li><a href="#">Best clothes</a></li>
              <li><a href="#">Automobiles</a></li>
              <li><a href="#">Home interior</a></li>
              <li><a href="#">Electronics</a></li>
              <li><a href="#">Technologies</a></li>
              <li><a href="#">Digital goods</a></li>
              <li class="has-submenu"><a href="#">More items</a>
                <ul class="submenu">
                  <li><a href="#">Submenu name</a></li>
                  <li><a href="#">Great submenu</a></li>
                  <li><a href="#">Another menu</a></li>
                  <li><a href="#">Some others</a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </aside>
        <div class="col-md-9">
          <article class="banner-wrap">
            <img src="../../assets/images/2.jpg" class="w-100 rounded">
          </article>
        </div>
      </div>
    </div>
  </section>
  <!-- ========================= SECTION MAIN END // ========================= -->

  <!-- ========================= SECTION  ========================= -->
  <section class="section-name padding-y-sm">
    <div class="container">
      <header class="section-heading">
        <a href="#" class="btn btn-outline-primary float-end">See all</a>
        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          Filter
        </button>
        <div class="collapse mt-1" id="collapseExample">
          <div class="card card-body">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-3">
                <h6>Sort By</h6>
                <ul class="list-unstyled">
                  <li>
                    <a href="#" class="filter-link">
                      Default
                    </a>
                  </li>
                  <li>
                    <a href="#" class="filter-link">
                      Popularity
                    </a>
                  </li>
                  <li>
                    <a href="#" class="filter-link">
                      Average rating
                    </a>
                  </li>
                  <li>
                    <a href="#" class="filter-link">
                      Newness
                    </a>
                  </li>
                  <li>
                    <a href="#" class="filter-link">
                      Price: Low to High
                    </a>
                  </li>
                  <li>
                    <a href="#" class="filter-link">
                      Price: High to Low
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-12 col-md-6 col-lg-3">
                <h6>Price</h6>
                <ul class="list-unstyled">
                  <li>
                    <a href="#" class="filter-link">
                      All
                    </a>
                  </li>
                  <li>
                    <a href="#" class="filter-link">
                      $0.00 - $50.00
                    </a>
                  </li>
                  <li>
                    <a href="#" class="filter-link stext-106 trans-04">
                      $50.00 - $100.00
                    </a>
                  </li>
                  <li>
                    <a href="#" class="filter-link stext-106 trans-04">
                      $100.00 - $150.00
                    </a>
                  </li>
                  <li>
                    <a href="#" class="filter-link stext-106 trans-04">
                      $150.00 - $200.00
                    </a>
                  </li>
                  <li>
                    <a href="#" class="filter-link stext-106 trans-04">
                      $200.00+
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-12 col-md-6 col-lg-3">
                <h6>Color</h6>
                <ul class="list-unstyled">
                  <li>
                    <span class="color" style="background-color: #222;"></span>
                    <a href="#" class="filter-link">Black</a>
                  </li>
                  <li>
                    <span class="color" style="background-color: #4272d7;"></span>
                    <a href="#" class="filter-link">Blue</a>
                  </li>
                  <li>
                    <span class="color" style="background-color: #b3b3b3;"></span>
                    <a href="#" class="filter-link">Grey</a>
                  </li>
                  <li>
                    <span class="color" style="background-color: #00ad5f;"></span>
                    <a href="#" class="filter-link">Green</a>
                  </li>
                  <li>
                    <span class="color" style="background-color: #fa4251;"></span>
                    <a href="#" class="filter-link">Red</a>
                  </li>
                  <li class="filter-link-li">
                    <span class="color" style="background-color: #aaa;"></span>
                    <a href="#" class="filter-link">White</a>
                  </li>
                </ul>
              </div>
              <div class="col-12 col-md-6 col-lg-3">
                <h6>Tags</h6>
                <div class="d-flex flex-wrap">
                  <a href="#" class="tag-filter-link">Fashion</a>
                  <a href="#" class="tag-filter-link">Lifestyle</a>
                  <a href="#" class="tag-filter-link">Denim</a>
                  <a href="#" class="tag-filter-link">Streetstyle</a>
                  <a href="#" class="tag-filter-link">Crafts</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h3 class="section-title">Popular products</h3>
      </header>
      <div class="row">
        <div class="col-md-3">
          <div href="#" class="card card-product-grid">
            <a href="#" class="img-wrap"> <img src="../../assets/images/items/1.jpg"> </a>
            <figcaption class="info-wrap">
              <a href="#" class="title">Just another product name</a>
              <div class="price mt-1">$179.00</div>
            </figcaption>
          </div>
        </div>
        <div class="col-md-3">
          <div href="#" class="card card-product-grid">
            <a href="#" class="img-wrap"> <img src="../../assets/images/items/2.jpg"> </a>
            <figcaption class="info-wrap">
              <a href="#" class="title">Some item name here</a>
              <div class="price mt-1">$280.00</div>
            </figcaption>
          </div>
        </div>
        <div class="col-md-3">
          <div href="#" class="card card-product-grid">
            <a href="#" class="img-wrap"> <img src="../../assets/images/items/3.jpg"> </a>
            <figcaption class="info-wrap">
              <a href="#" class="title">Great product name here</a>
              <div class="price mt-1">$56.00</div>
            </figcaption>
          </div>
        </div>
        <div class="col-md-3">
          <div href="#" class="card card-product-grid">
            <a href="#" class="img-wrap"> <img src="../../assets/images/items/4.jpg"> </a>
            <figcaption class="info-wrap">
              <a href="#" class="title">Just another product name</a>
              <div class="price mt-1">$179.00</div>
            </figcaption>
          </div>
        </div>
        <div class="col-md-3">
          <div href="#" class="card card-product-grid">
            <a href="#" class="img-wrap"> <img src="../../assets/images/items/5.jpg"> </a>
            <figcaption class="info-wrap">
              <a href="#" class="title">Just another product name</a>
              <div class="price mt-1">$179.00</div>
            </figcaption>
          </div>
        </div>
        <div class="col-md-3">
          <div href="#" class="card card-product-grid">
            <a href="#" class="img-wrap"> <img src="../../assets/images/items/6.jpg"> </a>
            <figcaption class="info-wrap">
              <a href="#" class="title">Some item name here</a>
              <div class="price mt-1">$280.00</div>
            </figcaption>
          </div>
        </div>
        <div class="col-md-3">
          <div href="#" class="card card-product-grid">
            <a href="#" class="img-wrap"> <img src="../../assets/images/items/7.jpg"> </a>
            <figcaption class="info-wrap">
              <a href="#" class="title">Great product name here</a>
              <div class="price mt-1">$56.00</div>
            </figcaption>
          </div>
        </div>
        <div class="col-md-3">
          <div href="#" class="card card-product-grid">
            <a href="#" class="img-wrap"> <img src="../../assets/images/items/9.jpg"> </a>
            <figcaption class="info-wrap">
              <a href="#" class="title">Just another product name</a>
              <div class="price mt-1">$179.00</div>
            </figcaption>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- ========================= SECTION  END // ========================= -->

  <!-- ========================= SECTION  ========================= -->
  <section class="section-name padding-y bg">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h3>Download app demo text</h3>
          <p>Get an amazing app  to make Your life easy</p>
        </div>
        <div class="col-md-6 text-md-end">
          <a href="#"><img src="../../assets/images/misc/appstore.png" height="40"></a>
          <a href="#"><img src="../../assets/images/misc/appstore.png" height="40"></a>
        </div>
      </div>
    </div>
  </section>
  <!-- ========================= SECTION  END // ======================= -->
</template>

<script>
export default {
  name: "Index"
}
</script>

<style scoped>

</style>