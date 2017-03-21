package com.websystique.springboot.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ViewController {
	@RequestMapping("/")
	public String home(ModelMap modal) {
		modal.addAttribute("title", "Dear Learner");
		modal.addAttribute("message", "Welcome to SpringBoot");
		return "index";
	}
}
