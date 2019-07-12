package com.fourward.urcoach.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Component;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/**
 * Gym
 */

@Component
@NoArgsConstructor(access = AccessLevel.PUBLIC)
@Entity
@Getter
@Setter
@ToString
@Table(name = "gyms")
public class Gyms {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "gym_id") private Long gymId;
  @Column(name ="gym_name")private String gymName;
  @Column(name = "gym_info")private String gymInfo;
  @Column(name = "gym_time")private String gymTime;
  @Column(name = "gym_loc") private String gymLoc;
  @Column(name = "gym_photo") private String gymPhoto;

  @Builder
  private Gyms(String gymName, String gymInfo, String gymTime, String gymLoc, String gymPhoto ) {
     this.gymName = gymName;
     this.gymInfo = gymInfo;
     this.gymTime = gymTime;
     this.gymLoc = gymLoc;
     this.gymPhoto = gymPhoto;
  }
}