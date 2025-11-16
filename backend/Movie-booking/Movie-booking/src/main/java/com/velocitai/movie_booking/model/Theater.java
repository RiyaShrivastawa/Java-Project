package com.velocitai.movie_booking.model;


import java.util.List;

import org.springframework.stereotype.Component;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.velocitai.movie_booking.util.City;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "theaters")
@Component
@Getter
@Setter
public class Theater {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "theater_id")
	private long id;
	@Column(name = "theater_name")
	private String name;
	@Column(name = "theater_address")
	private String address;
	@Enumerated(EnumType.STRING)
	private City city;
	@JsonIgnore
	@OneToMany(mappedBy = "theater") // Indicates the 'theater' field in the Show class
	private List<Show> showTimes;
	@JsonIgnore
	@OneToMany
	private List<Movie> movies;
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
	public City getCity() {
		return city;
	}
	public void setCity(City city) {
		this.city = city;
	}
	public List<Show> getShowTimes() {
		return showTimes;
	}
	public void setShowTimes(List<Show> showTimes) {
		this.showTimes = showTimes;
	}
	public List<Movie> getMovies() {
		return movies;
	}
	public void setMovies(List<Movie> movies) {
		this.movies = movies;
	}
    
	
	
}
