---
title: "Converting Data To NWB"

### List 
list:
    enable: true
    title: "Neurodata Without Borders (NWB) is a data standard for neurophysiology. Converting data to NWB involves:"
    items:
        - "Reading data and metadata from source files"
        - "Adding necessary metadata"
        - "Writing data and metadata to NWB following best practices"
        - "Packaging large datasets for optimal cloud deployment"
    content: "The NWB ecosystem offers various solutions, ranging from automated no-code tools to fine-grained programmatic options."

### Available Tools
available_tools_section:
    enable: true
    boxes: 
        - icon: "/images/using-nwb/nwb-guide.png"
          title: "NWB GUIDE (GUI for Data Entry)"
          type: "Downloadable application"
          features:
            - "Guides users through data conversion process"
            - "Supports 40+ common data formats"
            - "Allows metadata entry"
            - "Offers NWB file inspection via NWB Inspector"
            - "Offers data visualization via Neurosift"
            - "Facilitates uploading to DANDI Archive"
          limitations: "May require manual addition of lab-specific data"
          resources:
            - text: "Text Tutorial"
              link: /
            - text: "YouTube Walkthrough"
              link: /

        - icon: "/images/using-nwb/neuroconv.png"
          title: "NeuroConv"
          type: "Python library (underlies NWB GUIDE)"
          features:
            - "Supports 44+ neurophysiology data formats"
            - "Offers more flexibility than NWB GUIDE"
            - "Provides tools for post-hoc time alignment of multiple data streams"
            - "Supports cloud deployment"
          resources:
            - text: "GitHub Repository"
              link: /
            - text: "Documentation"
              link: /

        - icon: "/images/using-nwb/pynwb.png"
          title: "PyNWB"
          type: "Python library (underlies NeuroConv)"
          features:
            - "Building NWB files from scratch"
            - "Working with unsupported data formats"
            - "Developing custom NWB extensions"
          resources:
            - text: "GitHub Repository"
              link: /
            - text: "Documentation"
              link: /
            - text: "Tutorials"
              link: /
            - text: "NWB YouTube Channel"
              link: /

        - icon: "/images/using-nwb/matnwb.png"
          title: "MatNWB"
          type: "MATLAB library"
          features:
            - "Building NWB files from scratch"
            - "Working with unsupported data formats"
          resources:
            - text: "GitHub Repository"
              link: /
            - text: "Tutorials"
              link: /
            - text: "NWB YouTube Channel"
              link: /

### Choosing Tools
choosing_tools:
    enable: true
    title: "Choosing the Right Tool"
    items:
        - "For most common data formats and straightforward conversions, start with NWB GUIDE."
        - "If you need more flexibility or are comfortable with Python, consider NeuroConv"
        - "For custom data formats, complex conversions, or when developing NWB extensions, use PyNWB or MatNWB."
    content: "Remember to consult the provided documentation and tutorials for detailed guidance on using each tool"
---