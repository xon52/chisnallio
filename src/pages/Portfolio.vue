<template>
  <!-- Portfolio section for my website -->
  <div id="portfolio">
    <div id="portfolio-header">
      <h2>Portfolio</h2>
      <p>Here are some of my projects</p>
    </div>
    <div id="portfolio-content">
      <div id="portfolio-item">
        <div id="portfolio-item-image">
          <img src="https://thumbs2.imgbox.com/0b/1e/0Z0Z0Z0Z_t.jpg" alt="Project 1" />
        </div>
        <div id="portfolio-item-content">
          <h3>Project 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Quisquam, quae. Quisquam, quae.
            Quisquam, quae.
          </p>
          <div id="portfolio-item-links">
            <a href=" ">View</a>
            <a href=" ">Source</a>
          </div>
        </div>
      </div>
      <div id="portfolio-item">
        <div id="portfolio-item-image">
          <img src="https://thumbs2.imgbox.com/0b/1e/0Z0Z0Z0Z_t.jpg" alt="Project 1" />
        </div>
        <div id="portfolio-item-content">
          <h3>Project 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Quisquam, quae. Quisquam, quae.
            Quisquam, quae.
          </p>
          <div id="portfolio-item-links">
            <a href=" ">View</a>
            <a href=" ">Source</a>
          </div>
        </div>
      </div>
      <div id="portfolio-item">
        <div id="portfolio-item-image">
          <img src="https://thumbs2.imgbox.com/0b/1e/0Z0Z0Z0Z_t.jpg" alt="Project 1" />
        </div>
        <div id="portfolio-item-content">
          <h3>Project 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Quisquam, quae. Quisquam, quae.
            Quisquam, quae.
          </p>
          <div id="portfolio-item-links">
            <a href=" ">View</a>
            <a href=" ">Source</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
#portfolio {
  padding: 2rem 0;
  background-color: #f5f5f5;
  #portfolio-header {
    text-align: center;
    h2 {
      font-size: 2rem;
      font-weight: 600;
      color: #333;
    }
    p {
      font-size: 1.2rem;
      color: #777;
    }
  }
  #portfolio-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
    margin-top: 2rem;
    #portfolio-item {
      background-color: #fff;
      border-radius: 5px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      #portfolio-item-image {
        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
      }
      #portfolio-item-content {
        padding: 1rem;
        h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #333;
        }
        p {
          font-size: 1rem;
          color: #777;
        }
        #portfolio-item-links {
          display: flex;
          justify-content: space-between;
          margin-top: 1rem;
          a {
            font-size: 1rem;
            color: #777;
            &:hover {
              color: #333;
            }
          }
        }
      }
    }
  }
}
</style>
