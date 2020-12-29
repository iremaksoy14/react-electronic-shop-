import React, { useState } from 'react';

import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

import { 
  Container,
  CardDataContainer,
  CardData,
  Text,
  InputGroup,
  Input,
  InputContainerFlex,
  InputFlex,
  Select,
  PaymentButton,
  PaymentText,
  CreditCard
} from './styles';

import Header from './Header/index';

export default function CreditCardPage() {
  const [cvc, setCvc] = useState('');
  const [expiry, setExpiry] = useState('');
  const [focus, setFocus] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  return (
    <Container>
      <Header />
      <CardDataContainer>

        <CardData>
          <InputGroup>
            <Text typing={number}>Kart Numarası</Text>
            <Input 
              typing={number}
              type="text"
              name="number" 
              onChange={e => setNumber(e.target.value)} 
              onFocus={e => setFocus(e.target.name)}  
            />
          </InputGroup>

          <InputGroup>
            <Text typing={name}>Kart Üzerinde Yazılı İsim</Text>
            <Input 
              typing={name}
              type="text" 
              name="name"
              onChange={e => setName(e.target.value)}
              onFocus={e => setFocus(e.target.name)}   
            />
          </InputGroup>

          <InputContainerFlex>
            <InputFlex>
              <Text typing={expiry}>Son Kullanma Tarihi</Text>
              <Input 
                typing={expiry}
                type="text" 
                name="expiry"
                onChange={e => setExpiry(e.target.value)}
                onFocus={e => setFocus(e.target.name)} 
              />
            </InputFlex>
            
            <InputFlex>
              <Text typing={cvc}>Güvenlik Kodu</Text>
              <Input 
                typing={cvc}
                type="text" 
                name="cvc"
                onChange={e => setCvc(e.target.value)} 
                onFocus={e => setFocus(e.target.name)}  
              />
            </InputFlex>          
          </InputContainerFlex>

          <InputGroup>
            <Text>Parcelas</Text>
            <Select name="name" onFocus={e => setFocus(e.target.name)}>
              <option value="" hidden>
             
                     Ödeme şeklini seçin
              </option>
              <option value="1">Normal fiyat </option>
              <option value="2">2X - 60,00   faizli</option>
              <option value="3">3X -  40,00  faizli</option>
            </Select>
          </InputGroup>

          <PaymentButton onClick={() => alert("Ödmeeniz başarıyla alınmıştır...")}>
            <PaymentText>Ödemeyi Yap</PaymentText>
          </PaymentButton>
        </CardData>

        <CreditCard>
          <Cards
            cvc={cvc}
            expiry={expiry}
            focused={focus}
            name={name}
            number={number}
          />
        </CreditCard>

      </CardDataContainer>
    </Container>
  );
};