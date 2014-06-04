build: components
	@component build -s Router
components:
	@component install
clean:
	@rm -rf build/ components/

.PHONY: clean