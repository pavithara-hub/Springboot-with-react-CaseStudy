package com.spring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.spring.model.User;
import com.spring.repository.UserRepository;

@SpringBootApplication
public class SpringbootConnectApplication implements CommandLineRunner{

	public static void main(String[] args) {
		SpringApplication.run(SpringbootConnectApplication.class, args);
	}
	
	@org.springframework.beans.factory.annotation.Autowired
	private UserRepository userRepository;
	
	public void run(String...args) throws Exception{
		this.userRepository.save(new User("Damon","Salvatore","Mysticfall"));
		this.userRepository.save(new User("Caroline","Forbes","Dallas"));
		this.userRepository.save(new User("Klaus","Michelson","Neworelon"));
		this.userRepository.save(new User("Bonnie","Bennet","Amstredam"));
		this.userRepository.save(new User("Stefan","Salvatore","Phillippines"));
	}

}
