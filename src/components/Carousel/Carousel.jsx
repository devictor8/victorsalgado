import React, { useEffect, useState }from 'react';
import fetchRepos from '../../api/fetchRepos';
import RepoCard from '../RepoCard/RepoCard';
import './Carousel.css';
import { register } from 'swiper/element/bundle';
register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Swiper, SwiperSlide} from 'swiper/react';


function Carousel() {
	const [dataRepo, setDataRepo] = useState([]);
	
	useEffect(()=> {
		fetchRepos().then((response) => setDataRepo(response));
	}, []);
	
	return (
		<Swiper
			slidesPerView={1}
			pagination={{ clickable: true }}
			navigation
			className="slider"
		> 
			{
				dataRepo.map((repo) => {
					const name = repo.name;
					if(repo.license != null) {
						return (
							<SwiperSlide className="slide-item" key={repo.id} >
								<RepoCard  data = {{name, repo}}/>
							</SwiperSlide>
						);
					}
				})
			}
		</Swiper>
	);
}

export default Carousel;
