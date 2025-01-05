import React from 'react'
import SectionHeading from './SectionsHeading/SectionHeading'
import Card from '../Card/Card';
import Jackets from '../../assets/img/aoKhoac.webp'
import T_Shirt from '../../assets/img/aoThun.webp'
import BabyTee from '../../assets/img/babyTee.webp'
import Shirt from '../../assets/img/SoMi.webp'
import Hoodie from '../../assets/img/hoodie.webp'
import Accessory from '../../assets/img/PhuKien.webp'
import Polo from '../../assets/img/Polo.webp'
import Trouser from '../../assets/img/QuanDai.webp'
import Short from '../../assets/img/QuanShort.webp'
import Sweatshirt from '../../assets/img/Sweatshirt.webp'

import Carousel from 'react-multi-carousel';
import { responsive } from '../../utils/Section.constants';
import './Categories.css';

const items = [{
    'title':'Áo Khoác',
    imagePath:Jackets
},{
    'title':'Áo Thun',
    imagePath:T_Shirt
},{
    'title':'Baby Tee',
    imagePath:BabyTee
},{
    'title':'Sơ Mi',
    imagePath:Shirt
},
{
    'title':'Hoodie',
    imagePath:Hoodie
},
{
    'title':'Áo Polo',
    imagePath:Polo
},{
  'title':'Quần dài',
  imagePath:Trouser
},
{
  'title':'Quần ngắn',
  imagePath:Short
},
{
  'title':'Phụ kiện',
  imagePath:Accessory
},
{
  'title':'Áo nỉ',
  imagePath:Sweatshirt
}];

const NewArrivals = () => {
  return (
    <>
    <SectionHeading title={'Thể loại'}/>
    <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={false}
        partialVisible={false}
        itemClass={'react-slider-custom-item'}
        className='px-10'
      >
        {items && items?.map((item,index)=> <Card key={item?.title +index} title={item.title} imagePath={item.imagePath}/>)}

      </Carousel>
    </>
  )
}

export default NewArrivals