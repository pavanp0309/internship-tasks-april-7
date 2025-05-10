

       const Print = () => {
      const print = {
        from: {
          name1: name1,
          email: email,
          address: address,
          phone: phone,
          business: business,
        },
        to: {
          name2: name2,
          email2: email2,
          address2: address2,
          phone2: phone2,
          business2: business2,
        },
        invoiceNumber: invoice,
        date: date,
        itemDescription: item,
        rate: rate,
        quantity: quantity,
        totalAmount: rate * quantity,
      };

      console.log("Print Data:", printData);
      alert(JSON.stringify(print, null, 2));
    };
  

export default Print
