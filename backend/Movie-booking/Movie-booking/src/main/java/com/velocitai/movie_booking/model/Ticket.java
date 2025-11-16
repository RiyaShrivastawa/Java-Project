package com.velocitai.movie_booking.model;

import java.util.List;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.stereotype.Component;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tickets")
@Component
@Getter
@Setter
public class Ticket {
	@Id
	@Column(name = "ticket_id")
	private String id;
	@Column(name = "ticket_totalprice")
	private double grandTotal;
	private String movieName;
	private String theatreName;
	@CreationTimestamp
	private String bookingTime;
	private String showTiming;
	@ManyToOne
	private User user;
	@OneToMany(cascade = CascadeType.ALL)
	private List<Seat> seatInfo;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public double getGrandTotal() {
		return grandTotal;
	}
	public void setGrandTotal(double grandTotal) {
		this.grandTotal = grandTotal;
	}
	public String getMovieName() {
		return movieName;
	}
	public void setMovieName(String movieName) {
		this.movieName = movieName;
	}
	public String getTheatreName() {
		return theatreName;
	}
	public void setTheatreName(String theatreName) {
		this.theatreName = theatreName;
	}
	public String getBookingTime() {
		return bookingTime;
	}
	public void setBookingTime(String bookingTime) {
		this.bookingTime = bookingTime;
	}
	public String getShowTiming() {
		return showTiming;
	}
	public void setShowTiming(String showTiming) {
		this.showTiming = showTiming;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public List<Seat> getSeatInfo() {
		return seatInfo;
	}
	public void setSeatInfo(List<Seat> seatInfo) {
		this.seatInfo = seatInfo;
	}
	
	

}