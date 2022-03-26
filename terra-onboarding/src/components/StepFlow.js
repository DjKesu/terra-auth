import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

export default function StepFlow() {
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));


  // form stuff
  const [formData, setFormData] = useState({
    walletName: "",
    password: "",
    passwordConfirm: ""
  });

  const updateFormData = event =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });

  const { walletName, password, passwordConfirm } = formData;

  return (
    <>
      <Stepper active={active} onStepClick={setActive} breakpoint="sm">
        <Stepper.Step label="Fist step" description="Create an account" allowStepSelect={active > 0}>
          Step 1 content: Create an account
          {/* wallet name, password, sentence */}
          <form>
            <div className='inputBox'>
              <input
        value={walletName}
        onChange={e => updateFormData(e)}
        placeholder="Wallet Name"
        type="text"
        name="walletName"
        required
      />
            </div>
            <div className='inputBox'>
              <input
        value={password}
        onChange={e => updateFormData(e)}
        placeholder="Password"
        type="password"
        name="password"
        required
      />
            </div>
      
      <div className='inputBox'>
        <input
        value={passwordConfirm}
        onChange={e => updateFormData(e)}
        placeholder="Confirm Password"
        type="password"
        name="passwordConfirm"
        required
      />
      </div>
      
      <button type="submit" className="login-with-google-btn">SUBMIT</button>
    </form>
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email" allowStepSelect={active > 1}>
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access" allowStepSelect={active > 2}>
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group position="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>
    </>
  );
}