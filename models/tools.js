/** @format */

const uploadButton = document.getElementById('uploadButton');
uploadButton.addEventListener('click', (event) => {
	event.preventDefault();
	const fileInput = document.getElementById('fileInput');
	const files = fileInput.files;
	// Check if any files are selected
	if (files.length === 0) {
		alert('Please select at least one file to upload.');
		return;
	} else {
		for (const file of files) {
			const img = URL.createObjectURL(file);

			document.getElementById('imgs').innerHTML += `<div class="flex-dir category">
							<div id="rename">
                            <p>${file.name}</p>
                            <input type="text"></input>
                            </div>
							<img src="${img}" style="width: "30vw">
						</div>`;
		}
	}
});
