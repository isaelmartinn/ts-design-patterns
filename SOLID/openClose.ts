// BAD WAY
class DiscountBad {
  giveDiscount(customerType: "premium" | "regular"): number {
    if (customerType === "premium") {
      return 10;
    } else if (customerType === "regular") {
      return 20;
    } else {
      return 10;
    }
  }
}

// Open close principle

interface Customer {
  giveDiscount(): number;

  addLoyaltyPoints(amountSpent: number): number;
}

class RegularCustomer implements Customer {
  giveDiscount(): number {
    return 10;
  }

  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent;
  }
}

class PremiumCustomer implements Customer {
  giveDiscount(): number {
    return 20;
  }

  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent * 2;
  }
}

class GoldCustomer implements Customer {
  giveDiscount(): number {
    return 30;
  }

  addLoyaltyPoints(amountSpent: number): number {
    return amountSpent + 3;
  }
}

class Discount {
  giveDiscount(customer: Customer): number {
    return customer.giveDiscount();
  }
}

const premiumCustomer = new PremiumCustomer();
const goldCustomer = new GoldCustomer();
const discount = new Discount();

console.log(discount.giveDiscount(goldCustomer));
