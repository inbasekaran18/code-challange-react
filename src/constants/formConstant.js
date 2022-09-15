//form input data
export const FormInput = [
  {
    name: 'name',
    label: 'Name',
    type: 'text',
    validations: ['string', 'required'],
    params: {
      required: 'Username is required'
    }
  },
  {
    name: 'rotation_period',
    label: 'Rotation period',
    type: 'number',
    validations: ['number', 'required'],
    params: {
      required: 'Rotation period is required'
    }
  },
  {
    name: 'orbital_period',
    label: 'Orbital period',
    type: 'number',
    validations: ['number', 'required'],
    params: {
      required: 'Orbital period period is required'
    }
  },
  {
    name: 'diameter',
    label: 'Diameter',
    type: 'number',
    validations: ['number', 'required'],
    params: {
      required: 'Diameter period is required'
    }
  },
  {
    name: 'climate',
    label: 'Climate',
    type: 'text',
    validations: ['string', 'required'],
    params: {
      required: 'climate period is required'
    }
  },
  {
    name: 'gravity',
    label: 'Gravity',
    type: 'text',
    validations: ['string', 'required'],
    params: {
      required: 'Gravity period is required'
    }
  },
  {
    name: 'surface_water',
    label: 'Surface water',
    type: 'number',
    validations: ['number', 'required'],
    params: {
      required: 'Gravity period is required'
    }
  },
  {
    name: 'terrain',
    label: 'Terrain',
    type: 'select',
    validations: ['string', 'required'],
    params: {
      required: 'Gravity period is required'
    },
    options: [
      {
        key: '',
        label: 'Select'
      },
      {
        key: 'ocean',
        label: 'Ocean'
      },
      {
        key: 'desert',
        label: 'Desert'
      },

      {
        key: 'mountains',
        label: 'Mountains'
      },
      {
        key: 'swamps',
        label: 'Swamps'
      },
      {
        key: 'rainforests',
        label: 'Rainforests'
      },
      {
        key: 'grasslands',
        label: 'Grasslands'
      },
      {
        key: 'tundra',
        label: 'Tundra'
      },
      {
        key: 'jungles',
        label: 'Jungles'
      },
      {
        key: 'forests',
        label: 'Forests'
      },
      {
        key: 'rocky',
        label: 'Rocky'
      },
      {
        key: 'lakes',
        label: 'Lakes'
      },
      {
        key: 'volcanoes',
        label: 'Volcanoes'
      },
      {
        key: 'glaciers',
        label: 'Glaciers'
      },
      {
        key: 'plains',
        label: 'Plains'
      },
      {
        key: 'underground',
        label: 'Underground'
      },
      {
        key: 'urban',
        label: 'Urban'
      },
      {
        key: 'wasteland',
        label: 'Wasteland'
      },
      {
        key: 'arctic',
        label: 'Arctic'
      },
      {
        key: 'moon',
        label: 'Moon'
      },
      {
        key: 'gasGiant',
        label: 'Gas giant'
      },
      {
        key: 'oceanic',
        label: 'Oceanic'
      },
      {
        key: 'unknown',
        label: 'Unknown'
      }
    ]
  }
]

//

export const planetInitalValue = {
  name: '',
  rotation_period: '',
  orbital_period: '',
  diameter: '',
  climate: '',
  gravity: '',
  terrain: '',
  surface_water: ''
}
