package com.velocitai.movie_booking.util;

import java.util.List;

import com.velocitai.movie_booking.model.Theater;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TheaterDto {

	private long id;
	private String name;
	private String address;
	private List<MovieDto> movies;
	public TheaterDto(Theater theater) {
		
		this.id = theater.getId();
		this.name = theater.getName();
		this.address = theater.getAddress();
		
	}
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public List<MovieDto> getMovies() {
		return movies;
	}
	public void setMovies(List<MovieDto> movies) {
		this.movies = movies;
	}
	
	
	
}
