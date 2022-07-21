package com.ironhack.pokemonjava.controller.dto;


public class TrainerDTO {

    private String name;
    private int age;
    private String hobby;
    private String photo;

    public TrainerDTO() {
    }

    public TrainerDTO(String name, int age, String hobby, String photo) {
        this.name = name;
        this.age = age;
        this.hobby = hobby;
        this.photo = photo;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getHobby() {
        return hobby;
    }

    public void setHobby(String hobby) {
        this.hobby = hobby;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }
}
