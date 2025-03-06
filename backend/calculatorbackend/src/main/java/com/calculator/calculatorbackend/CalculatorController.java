package com.calculator.calculatorbackend;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalculatorController {
    
    @GetMapping("/add")
    public Calculator add(@RequestParam String num1, @RequestParam String num2) {
        int result = Integer.parseInt(num1) + Integer.parseInt(num2);
        return new Calculator(Integer.toString(result));
    }
    
    @GetMapping("/sub")
    public Calculator sub(@RequestParam String num1, @RequestParam String num2) {
        int result = Integer.parseInt(num1) - Integer.parseInt(num2);
        return new Calculator(Integer.toString(result));
    }
}
