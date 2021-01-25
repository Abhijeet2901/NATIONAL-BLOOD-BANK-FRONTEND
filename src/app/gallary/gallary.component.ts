import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {

  imageObject: Array<object> = [{
    image: 'https://gulmohargreens.com/wp-content/uploads/2018/10/IMG_1894.jpg',
    thumbImage: 'https://gulmohargreens.com/wp-content/uploads/2018/10/IMG_1894.jpg',
    alt: 'alt of image',
    title: 'title of image'
  }, {
    image: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-71857,resizemode-1,msid-48376181/news/defence/over-400-army-personnel-take-part-in-blood-donation-camp.jpg',
    thumbImage: 'https://img.etimg.com/thumb/width-640,height-480,imgsize-71857,resizemode-1,msid-48376181/news/defence/over-400-army-personnel-take-part-in-blood-donation-camp.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://manavrachna.edu.in/wp-content/uploads/2018/09/IMG_7517-1024x587-1024x585.jpg',
    thumbImage: 'https://manavrachna.edu.in/wp-content/uploads/2018/09/IMG_7517-1024x587-1024x585.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://images.medindia.net/amp-images/health-images/blood-donor.jpg',
    thumbImage: 'https://images.medindia.net/amp-images/health-images/blood-donor.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://s3.india.com/wp-content/uploads/2020/06/Blood-Donor-Day-Insta.jpg',
    thumbImage: 'https://s3.india.com/wp-content/uploads/2020/06/Blood-Donor-Day-Insta.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://cdn.telanganatoday.com/wp-content/uploads/2018/10/khammam-3.jpg',
    thumbImage: 'https://cdn.telanganatoday.com/wp-content/uploads/2018/10/khammam-3.jpg',
    title: 'Image title',
    alt: 'Image alt'
  }, {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlnFsl44Umwzr3pU9HrPCIT_6vyQRrO1gUcQ&usqp=CAU',
    thumbImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlnFsl44Umwzr3pU9HrPCIT_6vyQRrO1gUcQ&usqp=CAU',
    title: 'Image title',
    alt: 'Image alt'
  }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
