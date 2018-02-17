package com.asher.domain;

import org.apache.ibatis.type.Alias;

@Alias("Paragraph")
public class Paragraph {

	private int bibleNum;
	private String bibleLongLabel;
	private int chapter;
	private int paragraph;
	private String sentence;
	public int getBibleNum() {
		return bibleNum;
	}
	public void setBibleNum(int bibleNum) {
		this.bibleNum = bibleNum;
	}
	public String getBibleLongLabel() {
		return bibleLongLabel;
	}
	public void setBibleLongLabel(String bibleLongLabel) {
		this.bibleLongLabel = bibleLongLabel;
	}
	public int getChapter() {
		return chapter;
	}
	public void setChapter(int chapter) {
		this.chapter = chapter;
	}
	public int getParagraph() {
		return paragraph;
	}
	public void setParagraph(int paragraph) {
		this.paragraph = paragraph;
	}
	public String getSentence() {
		return sentence;
	}
	public void setSentence(String sentence) {
		this.sentence = sentence;
	}
}
