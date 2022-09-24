const produce = document.getElementById('produce');
const origin = document.getElementById('origin');
const destination = document.getElementById('destination');
const button = document.getElementById('button');
const output = document.querySelector('.output');

// get produce, origin and destination from user
button.addEventListener('click', () => {
  // check inputs are valid
  if (produce.value === '' || origin.value === '' || destination.value === '') {
    alert('Please select an option for each field');
  } else {
    // check if intrastate movement
    if (origin.value === destination.value) {
      // check if intrastate movement with conditions
      if (origin.value === 'SA') {
        output.innerHTML = `CONDITIONAL: Moving fresh fruit within South Australian borders might be an issue
        due to outbreaks of Queensland and Mediterrean fruit fly. Check
        details about fruit fly outbreaks in South Australia and what movement conditions are in place`;
      } else if (origin.value === 'VIC') {
        output.innerHTML = `CONDITIONAL: Moving fresh fruit within Victorian borders may require a permit if the
        fruit is being moved into the Sunraysia Pest Free Area (PFA).`;
      } else {
        output.innerHTML = `FREE MOVEMENT: Moving fresh fruit within ${origin.value} borders should be fine.`;
      }
      // check if destination prohibits produce from origin
    } else if (destination.value === 'SA' && origin.value != 'TAS') {
      output.innerHTML = `PROHIBITED: Unfortunately SA does not permit entry of fresh fruit from other states
      except Tasmania which is fruit fly free`;
    } else if (destination.value === 'QLD' && origin.value === 'WA') {
      output.innerHTML = `PROHIBITED: Unfortunately QLD does not accept fresh fruit from WA because Mediterrean
      fruit fly is present in WA.`;
    } else if (destination.value === 'NT' && origin.value === 'WA') {
      output.innerHTML = `PROHIBITED: Unfortunately NT does not accept fresh fruit from WA because Mediterrean
      fruit fly is present in WA.`;
    }
    // if destination has no restrictions produce on from origin
      else if (destination.value === 'QLD') {
      output.innerHTML = `FREE MOVEMENT: Moving fresh fruit from ${origin.value} to ${destination.value} should be fine.`;
    } else if (destination.value === 'NT' && origin.value != 'WA') {
      output.innerHTML = `FREE MOVEMENT: Moving fresh fruit from ${origin.value} to ${destination.value} should be fine.`;
    } else if (destination.value === 'NSW' && origin.value === 'TAS') {
      output.innerHTML = `FREE MOVEMENT: Moving fresh fruit from ${origin.value} to ${destination.value} should be fine.`;
    } else if (destination.value === 'SA' && origin.value === 'TAS') {
      output.innerHTML = `FREE MOVEMENT: Moving fresh fruit from ${origin.value} to ${destination.value} should be fine.`;
    }
    // if destination has restrictions on prodcue from origin
    else {
      output.innerHTML = `CONTITIONS: Moving fresh fruit from ${origin.value} to ${destination.value} requires certification.
      Please consult authorities at the destination state for guidance.`;
    }

    output.style.display = 'flex';
  }
});
