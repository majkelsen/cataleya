import React, { Component } from 'react';
import "../styles/Product.css";

import icons from '../img/products/healtlyIcons.png'



class Product extends Component {
  state = {
    visible: false,
    photoToShow: '',
  }

  showBigPhoto = (e) => {
    this.setState({
      visible: true,
      photoToShow: e.target.name,
    })
  }

  hideBigPhoto = () => {
    this.setState({
      visible: false,
      photoToShow: '',
    })
  }

  changePhotoNext = () => {
    let photoList = this.props.productData.graphicsNames
    let prevPhoto = photoList.indexOf(this.state.photoToShow)
    let newPhoto = prevPhoto

    if (photoList.length === newPhoto + 1) {
      newPhoto = 0
    }

    else (
      newPhoto++
    )

    this.setState({
      photoToShow: photoList[newPhoto]
    })
  }

  changePhotoBack = () => {
    let photoList = this.props.productData.graphicsNames
    let prevPhoto = photoList.indexOf(this.state.photoToShow)
    let newPhoto = prevPhoto

    if (newPhoto === 0) {
      newPhoto = photoList.length - 1
    }
    else (
      newPhoto--
    )

    this.setState({
      photoToShow: photoList[newPhoto]
    })
  }

  render() {
    let { productData } = this.props
    let { graphicsNames, name } = productData

    return (
      <>
        {this.state.visible &&
          <div className="bigPhotoPopContainer" >
            <div className="bigPhotoBgc" onClick={this.hideBigPhoto}></div>
            <div className="popPhoto">
              <img src={require(`../img/products/${name}/${this.state.photoToShow}`)} alt="photoPop" name={this.state.photoToShow} className="productPopUpPhoto" />

              <div className="changePhotoBack" onClick={this.changePhotoBack}>
                <div className="changePhotoBgc"></div>
                <i className="fas fa-angle-left"></i>
              </div>

              <div className="changePhotoNext" onClick={this.changePhotoNext}>
                <div className="changePhotoBgc"></div>
                <i className="fas fa-angle-right"></i>
              </div>

              <div className="hideBigPhoto" onClick={this.hideBigPhoto}>
                <i className="fas fa-times"></i>
              </div>

            </div>
          </div>}
        <article className="productSinglePageDescription">
          <div className="productTop">
            <div className='productTopLeft'>

              <img src={require(`../img/products/${name}/min${graphicsNames[0]}`)} alt="photoMain" name={graphicsNames[0]} className="productMainPhoto" onClick={this.showBigPhoto} />

              <div className="anotherPhotos">

                {graphicsNames[1] &&
                  <img src={require(`../img/products/${name}/min${graphicsNames[1]}`)} alt="photo1" name={graphicsNames[1]} className="productAnotherPhotos"
                    onClick={this.showBigPhoto} />}

                {graphicsNames[2] &&
                  <img src={require(`../img/products/${name}/min${graphicsNames[2]}`)} alt="photo2" name={graphicsNames[2]} className="productAnotherPhotos"
                    onClick={this.showBigPhoto} />}

                {graphicsNames[3] &&
                  <img src={require(`../img/products/${name}/min${graphicsNames[3]}`)} alt="photo3" name={graphicsNames[3]} className="productAnotherPhotos"
                    onClick={this.showBigPhoto} />}

                {graphicsNames[4] &&
                  <img src={require(`../img/products/${name}/min${graphicsNames[4]}`)} alt="photo4" name={graphicsNames[4]} className="productAnotherPhotos"
                    onClick={this.showBigPhoto} />}
              </div>

            </div>
            <div className="productTopRight">
              <p className="productTitle">{productData.name}</p>
              <p className="productText">{productData.text}</p>
              <p className="productSize">{productData.boxSize}</p>
              <img src={icons} alt="healthly" className="healthlyIcons" />
            </div>
          </div>
          <div className="productBottom">
            <div className="productBottomUse">
              <p className="title">How To Use:</p>
              <p>{productData.howToUse}</p>
            </div>
            <div className="productBottomIngredients">
              <p className="title">Ingredients:</p>
              {productData.ingredients.map(ingredient => <p key={ingredient}>{ingredient}</p>)}
            </div>
            <div className="productBottomContact">
              <a href="/contact"><p>Contact Us</p><p>for Distributor close to You </p></a>
            </div>
          </div>
        </article>
      </>
    );
  }
}

export default Product
