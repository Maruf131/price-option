import PriceOption from "../priceOption/PriceOption";

const PriceOptions = () => {
    [
  {
    "id": 1,
    "name": "Basic Plan",
    "price": 25,
    "features": [
      "Access to gym equipment",
      "Locker room access",
      "Free water refill",
      "Open gym hours only",
      "1 free fitness assessment",
      "Access to cardio machines",
      "No contract, cancel anytime"
    ]
  },
  {
    "id": 2,
    "name": "Standard Plan",
    "price": 45,
    "features": [
      "24/7 gym access",
      "Locker room + showers",
      "2 group fitness classes per week",
      "Free Wi-Fi",
      "Discount on protein bars & drinks",
      "Access to strength & cardio zones",
      "1 guest pass per month",
      "Basic mobile app workout tracking"
    ]
  },
  {
    "id": 3,
    "name": "Premium Plan",
    "price": 70,
    "features": [
      "24/7 gym access",
      "Unlimited group fitness classes",
      "Personal trainer (2 sessions/month)",
      "Access to sauna & steam room",
      "Free protein shake (weekly)",
      "Priority access to new equipment",
      "3 guest passes per month",
      "Access to yoga, Zumba & HIIT classes",
      "Free body composition analysis",
      "Mobile app progress tracking"
    ]
  },
  {
    "id": 4,
    "name": "Family Plan",
    "price": 120,
    "features": [
      "Access for up to 4 family members",
      "24/7 gym access",
      "Locker + showers for each member",
      "Discount on kids fitness programs",
      "One free personal training session per family",
      "Weekend family workout classes",
      "Nutrition tips for kids & adults",
      "Free family fitness challenge events",
      "Shared mobile app account access"
    ]
  },
  {
    "id": 5,
    "name": "VIP Plan",
    "price": 200,
    "features": [
      "All Premium Plan benefits",
      "Unlimited personal training",
      "Nutrition consultation",
      "Priority class booking",
      "Private lounge & relaxation area",
      "Free gym merchandise (T-shirt & bottle)",
      "Exclusive access to VIP-only classes",
      "Monthly massage & recovery session",
      "Dedicated locker with name tag",
      "Invitations to special fitness events"
    ]
  }
]

    return (
        <div>
            <h2 className="text-4xl font-bold text-center mt-5">Best Prices in the Town</h2>
            {
                PriceOptions.map(option => <PriceOption key={option.id} option ={option}></PriceOption>)
            }
        </div>
    );
};

export default PriceOptions;