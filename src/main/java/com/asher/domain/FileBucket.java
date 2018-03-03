package com.asher.domain;

import org.apache.ibatis.type.Alias;

@Alias("FileBucket")
public class FileBucket {

	private int beonho;
	private String imageName;
	private String ext;
	private byte[] image;
	
	public int getBeonho() {
		return beonho;
	}
	public void setBeonho(int beonho) {
		this.beonho = beonho;
	}
	public String getImageName() {
		return imageName;
	}
	public void setImageName(String imageName) {
		this.imageName = imageName;
	}
	public String getExt() {
		return ext;
	}
	public void setExt(String ext) {
		this.ext = ext;
	}
	public byte[] getImage() {
		return image;
	}
	public void setImage(byte[] image) {
		this.image = image;
	}
}
