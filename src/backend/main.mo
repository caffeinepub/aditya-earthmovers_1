import Iter "mo:core/Iter";
import Array "mo:core/Array";
import Order "mo:core/Order";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";

actor {
  type Inquiry = {
    id : Nat;
    name : Text;
    phone : Text;
    message : Text;
  };

  module Inquiry {
    public func compare(inquiry1 : Inquiry, inquiry2 : Inquiry) : Order.Order {
      Nat.compare(inquiry1.id, inquiry2.id);
    };
  };

  var nextId = 0;
  let inquiries = Map.empty<Nat, Inquiry>();

  public shared ({ caller }) func submitInquiry(name : Text, phone : Text, message : Text) : async () {
    let inquiry : Inquiry = {
      id = nextId;
      name;
      phone;
      message;
    };
    inquiries.add(nextId, inquiry);
    nextId += 1;
  };

  public query ({ caller }) func getAllInquiries() : async [Inquiry] {
    inquiries.values().toArray().sort();
  };

  public query ({ caller }) func getInquiry(id : Nat) : async Inquiry {
    switch (inquiries.get(id)) {
      case (null) { Runtime.trap("Inquiry does not exist") };
      case (?inquiry) { inquiry };
    };
  };
};
