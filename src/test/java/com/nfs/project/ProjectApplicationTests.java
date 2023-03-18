package com.nfs.project;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;

import com.nfs.project.dto.customerRequest;
import com.nfs.project.model.customer;
import com.nfs.project.repository.CustomerRepository;
import com.nfs.project.service.CustomerService;
@SpringBootTest
class ProjectApplicationTests {

	@Test
	void contextLoads() {
	}

	@Mock
	private CustomerRepository customerRepository;

	@Test
	public void testGetAllCustomers() {
		// Create some mock customers
		List<customer> mockCustomers = new ArrayList<>();
		mockCustomers
				.add(new customer(1, "John", "Doe", "123 Main St", "New York", "10001", "1234567890", LocalDate.now()));
		mockCustomers.add(
				new customer(2, "Jane", "Doe", "456 Maple Ave", "Los Angeles", "90001", "0987654321", LocalDate.now()));

		// Configure the mock repository to return the mock customers when `findAll()`
		// is called
		when(customerRepository.findAll()).thenReturn(mockCustomers);

		// Call the service method and assert the result
		CustomerService customerService = new CustomerService(customerRepository);
		List<customer> customers = customerService.getAllCustomers();
		assertThat(customers).isEqualTo(mockCustomers);
	}

	@Test
	public void testAddCustomer() {
		// Create a mock customer request object
		customerRequest mockRequest = new customerRequest("John", "Doe", "123 Main St", "New York", "10001",
				"1234567890");

		// Configure the mock repository to return a mock customer when `save()` is
		// called
		customer mockCustomer = new customer(0, "John", "Doe", "123 Main St", "New York", "10001", "1234567890",
				LocalDate.now());
		when(customerRepository.save(any(customer.class))).thenReturn(mockCustomer);

		// Call the service method and assert the result
		CustomerService customerService = new CustomerService(customerRepository);
		customer result = customerService.AddCustomer(mockRequest);
		assertThat(result).isEqualTo(mockCustomer);
	}
}
